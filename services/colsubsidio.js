const url = 'https://www.colsubsidio.com/guiadeservicios/wp_guiaservicio/wp-json/api/v1/categories'

export async function get() {
    return fetch(url)
        .then(data => data.json())
}
