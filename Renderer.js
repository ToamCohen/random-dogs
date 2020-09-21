class Renderer { 

	render(data){
		$("#container").empty()
		const source = $("#template-dogs-random").html()
		const template = Handlebars.compile(source)
		const randomDogsHTML = template({random: data.message})                           
		$("#container").append(randomDogsHTML)
	}
}