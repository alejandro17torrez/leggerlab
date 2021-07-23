const url_list = 'https://www.colsubsidio.com/guiadeservicios/wp_guiaservicio/wp-json/api/v1/categories'

export async function get_list() {  
    const data = await fetch(url_list)
    return await data.json()
}


