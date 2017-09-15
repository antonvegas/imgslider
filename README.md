# imgslider

The easy JS slider 
![screenshot 3](https://user-images.githubusercontent.com/4545581/30478166-92b20664-9a18-11e7-8789-fba35cc02197.png)

## How to use?

JS 
--
```
$('.sliderOfContent').imgSlider({
    currentPosition: 0,
    slideWidth:  300,
    showStatusPosition: true,
    step: 1, 
    setinterval: false
});	
```

HTML
--
```
<div class="sliderOfContent" style="width: 300px;"> 

	<div class="control align-self-center left" control="left">
		left
	</div>

	<div class="slidesContainer">
		<div class="slide">
			<img src="first" alt=""> 
		</div>
		<div class="slide">
			<img src="second" alt=""> 
		</div> 
		<div class="slide">
			<img src="third" alt=""> 
		</div>
	</div>

	<div class="control align-self-center right" control="right"> 
		right
	</div>
</div>
```
