s0.initScreen()
a = Math.sin(time)
b = Math.sin(10)

src(s0)
	.layer(src(s0)
           .scrollX(0.01, 0.1)
           .modulate(noise(1),()=>a.fft[1])
           .pixelate(200)
           .mult(osc(10, -0.1, b))
           .repeat(3,4)
           )
	.blend(o0, 0.9)
	.modulate(o0, Math.sin(time))
	.out()

    