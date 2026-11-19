import { useEffect, useRef, useState } from 'react'

const MODES = ['01 / RIPPLE FIELD', '02 / INTERFERENCE', '03 / SATURN BAND']
const LIGHT = [-0.5, -0.6, 0.62]

function buildPoints(n) {
  const pts = []
  const ga = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const rad = Math.sqrt(1 - y * y)
    const th = ga * i
    pts.push([Math.cos(th) * rad, y, Math.sin(th) * rad])
  }
  return pts
}

function shape([x, y, z], t, mode) {
  let k = 1
  if (mode === 0) {
    k = 1 + 0.18 * Math.sin(6 * y + t * 1.2) * Math.cos(5 * Math.atan2(z, x))
  } else if (mode === 1) {
    k = 1 + 0.28 * Math.sin(4 * x + t) * Math.sin(4 * y + t * 0.8) * Math.sin(4 * z)
  } else {
    const ring = Math.abs(y) < 0.35 ? 1.25 : 0.75
    k = ring + 0.08 * Math.sin(8 * Math.atan2(z, x) + t * 2)
  }
  return [x * k, y * k, z * k]
}

export default function StippleSphere({ density = 5200, children }) {
  const canvasRef = useRef(null)
  const modeRef = useRef(0)
  const [mode, setMode] = useState(0)

  const cycle = () => {
    const next = (modeRef.current + 1) % MODES.length
    modeRef.current = next
    setMode(next)
  }

  useEffect(() => {
    const cv = canvasRef.current
    const ctx = cv.getContext('2d')
    const pts = buildPoints(density)
    const mouse = { x: -9999, y: -9999 }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let raf = 0

    const draw = (t) => {
      if (!w || !h) return
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = getComputedStyle(cv).color
      const R = Math.min(w, h) * 0.32
      const cx = w * 0.58
      const cy = h * 0.46
      const ay = t * 0.35
      const ax = 0.45 + Math.sin(t * 0.2) * 0.15
      const cyA = Math.cos(ay), syA = Math.sin(ay), cxA = Math.cos(ax), sxA = Math.sin(ax)
      for (let i = 0; i < pts.length; i++) {
        const p = shape(pts[i], t, modeRef.current)
        const x = p[0] * cyA - p[2] * syA
        const z0 = p[0] * syA + p[2] * cyA
        const y = p[1] * cxA - z0 * sxA
        const z = p[1] * sxA + z0 * cxA
        if (z < -0.15) continue
        const len = Math.hypot(x, y, z) || 1
        const lit = Math.max(0, (x * LIGHT[0] + y * LIGHT[1] + z * LIGHT[2]) / len)
        let sx = cx + x * R
        let sy = cy + y * R
        const dx = sx - mouse.x
        const dy = sy - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < 9000) {
          const f = ((1 - d2 / 9000) * 28) / Math.sqrt(d2 + 1)
          sx += dx * f
          sy += dy * f
        }
        const s = 0.35 + (1 - lit) * 1.45 * (0.6 + 0.4 * z)
        if (s < 0.45 && i % 3) continue
        ctx.fillRect(sx - s / 2, sy - s / 2, s, s)
      }
    }

    const fit = () => {
      const r = cv.getBoundingClientRect()
      const d = window.devicePixelRatio || 1
      cv.width = Math.max(1, r.width * d)
      cv.height = Math.max(1, r.height * d)
      ctx.setTransform(d, 0, 0, d, 0, 0)
      w = r.width
      h = r.height
      if (reduce) draw(4)
    }
    const move = (e) => {
      const r = cv.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const leave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(cv)
    cv.addEventListener('pointermove', move)
    cv.addEventListener('pointerleave', leave)

    if (!reduce) {
      const t0 = performance.now()
      const loop = (now) => {
        draw((now - t0) / 1000)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      cv.removeEventListener('pointermove', move)
      cv.removeEventListener('pointerleave', leave)
    }
  }, [density])

  return (
    <div className="figure">
      <span className="plus tl" aria-hidden="true">+</span>
      <span className="plus tr" aria-hidden="true">+</span>
      <div className="figure-top">
        <span>FIG. 01 — STIPPLED SPHERE / CLICK TO RESHAPE</span>
        <span>MODE {MODES[mode]}</span>
      </div>
      <canvas
        ref={canvasRef}
        onClick={cycle}
        role="img"
        aria-label="Animated sphere drawn from thousands of black dots. Click to change its shape."
      />
      {children}
      <span className="figure-bottom">03 FORMS · DRAG CURSOR TO DISPLACE</span>
    </div>
  )
}
