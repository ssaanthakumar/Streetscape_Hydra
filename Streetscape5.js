s0.initScreen()

src(s0)
	.layer(src(s0)
			.modulate(noise(1),()=>a.fft[1])
        	.mult(osc(10, -0.1, 10))
        	.scrollX(1, 0.1)
     		.pixelate(200)
        	)
	.blend(o0, 0.9)
	.modulate(o0, Math.sin(time))
	.out()

    