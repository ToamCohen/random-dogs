const renderer = new Renderer()


const input = $("#input")
const button = $("#button")

const dogsRandom = function (){
const inputVal = input.val()
$.ajax({
	method:"GET",
	url:`https://dog.ceo/api/breed/${inputVal}/images/random/3`,
	success: function (data){
		renderer.render(data)
	},
	error: function (xhr , text, err){
		$("#container").empty().append(`<p>breed not found please try again</p>`)
	}
})
	 
	
}                                                                                                                      


button.on('click',dogsRandom)