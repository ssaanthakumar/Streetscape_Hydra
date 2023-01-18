s0.initScreen()

src(s0)
	.layer(src(s0)
           .modulate(noise(1),()=>a.fft[1])
           .mult(osc(10, -0.1, 10))
           )
	.blend(o0, 0.9)
	.out()
