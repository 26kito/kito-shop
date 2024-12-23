const fetchAllContent = (data) => {
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

const fetchContent = (data) => {
    let template = ''
    let counter = 0
    let limit = 6

    data.forEach((d) => {
        if (counter < limit) {
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

            counter++
        }
    })

    return template
}

const categories = {
    games: gamesList,
    voucher: voucherList,
    entertainment: entertainmentList
};

// Page init main content
// $('#content-wrapper').html(fetchContent(categories['games']));

// Fetch the content when any category is clicked
$('.category-menu div').on('click', (event) => {
    const category = $(event.currentTarget).data('category');
    $('#content-wrapper').html(fetchContent(categories[category]));

    // Remove 'active' class from all and set to clicked category
    $('.category-menu div').removeClass('active');
    $(event.currentTarget).addClass('active');
});

// Page init fetch all content
// $('#content-wrapper-all-products').html(fetchAllContent(categories['games']));

$('.category-menu-all-products div').on('click', (event) => {
    const category = $(event.currentTarget).data('category');
    $('#content-wrapper-all-products').html(fetchAllContent(categories[category]));

    // Remove 'active' class from all and set to clicked category
    $('.category-menu-all-products div').removeClass('active');
    $(event.currentTarget).addClass('active');
});

// Search feature
const allData = [...gamesList, ...voucherList, ...entertainmentList]

$('#search-input').on('keyup', (event) => {
    const keyword = $(event.currentTarget).val().toLowerCase();
    let temp = '';
    const filteredResults = allData.filter(item => item.name.toLowerCase().includes(keyword));

    if (keyword.length > 2 && filteredResults.length > 0) {
        filteredResults.forEach((row) => {
            temp += `
                <div class="suggestion-item d-flex align-items-center p-2">
                    <img src="${row.imageUrl}" alt="${row.name}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
                    <span>${row.name}</span>
                </div>
            `;
        });

        $('#search-suggestions').show().html(temp)
    } else {
        $('#search-suggestions').hide()
    }
});
// End of search feature

// Toastr notification function
const notifMessage = [
    {
        status: 'success',
        message: 'Mau top up dengan murah, cepat dan terpercaya? Kito Store jawabannya:D'
    },
    {
        status: 'success',
        message: 'Jangan lupa berlangganan dengan cara klik tombol Subscribe untuk mendapatkan promo menarik!'
    },
    {
        status: 'error',
        message: 'Hati-hati dengan akun yang mengatasnamakan Kito Store!'
    }
]

let currentIndex = 0 // To track the current notification index

setInterval(() => {
    if (currentIndex < notifMessage.length) {
        const { status, message } = notifMessage[currentIndex]

        toastr[status](message)

        currentIndex++ // Move to the next notification
    } else {
        currentIndex = 0 // Reset to the first notification
    }
}, 1000 * 10)
// End of toastr notification function