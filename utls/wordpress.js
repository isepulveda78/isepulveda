import https from 'https'

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
})

const API_URL = 'https://webdev102.com/wp-json/wp/v2/posts'
const categories = 'https://webdev102.com/wp-json/wp/v2/categories'
const category = 'https://webdev102.com/wp-json/wp/v2/posts?categories='

export async function getPosts(){
    const postsRes = await fetch(API_URL, {
        agent: httpsAgent
    })
    const posts = await postsRes.json()
    return posts
}

export async function getCategories(){
    const catsRes = await fetch(categories, {
        agent: httpsAgent
    }) 
    const cats = await catsRes.json()
    return cats
}

export async function getPost(slug){
    const posts = await getPosts()
    const postArray = posts.filter((post) => post.slug == slug)
    const post = postArray.length > 0 ? postArray[0] : null
    return post
}

export async function getCategoryId(){
    const postCat = await fetch(category, {
        agent: httpsAgent
    })
    return postCat
}

export async function getSlugs(){
    let elements = []
    elements = await getPosts()
    const elementsIds = elements.map((element) => {
        return {
            params: {
                slug: element.slug
            }
        }
    })
    return elementsIds
}


// Get multiple slugs from post types
// export async function getSlugs(type) {
//     let elements = []
//     switch (type) {
//       case 'posts':
//         elements = await getPosts();
//         break
//       case 'events':
//         elements = await getEvents();
//         break
//     }
//     const elementsIds = elements.map((element) => {
//       return {
//         params: {
//           slug: element.slug,
//         },
//       }
//     })
//     return elementsIds
//   }