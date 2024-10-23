const fetchAllGames = (data) => {
    let template = ''

    data.forEach((d) => {
        template += `
            <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                <div class="card text-center">
                    <img src="${d.imageUrl}" class="card-img-top" alt="${d.name}">
                    <div class="card-body">
                        <p class="card-title">${d.name}</p>
                    </div>
                </div>
            </div>
        `
    })

    return template
}

$('#games-list').html(fetchAllGames(gamesList))