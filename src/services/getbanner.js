const url = 'https://www.colsubsidio.com/guiadeservicios/wp_guiaservicio/wp-json/api/v1/banner/banner-servicios'

export async function get_banner() {  
    const data = await fetch(url)
    return await data.json()
}


