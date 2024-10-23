const fetchContent = (data) => {
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

const categories = {
    games: gamesList,
    voucher: voucherList,
    entertainment: entertainmentList
};

// Page init content
$('#content-wrapper').html(fetchContent(categories['games']));

// Fetch the content when any category is clicked
$('.category-menu div').on('click', (event) => {
    const category = $(event.currentTarget).data('category');
    $('#content-wrapper').html(fetchContent(categories[category]));

    // Remove 'active' class from all and set to clicked category
    $('.category-menu div').removeClass('active');
    $(event.currentTarget).addClass('active');
});
