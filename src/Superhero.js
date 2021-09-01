const API_KEY = "117370657186506"
const baseURL = `https://superheroapi.com/api.php/${API_KEY}`

const basicFetch = async (endpoint) => {
  const req = await fetch(`${baseURL}${endpoint}`)
  const json = await req.json()
  return json
}

// eslint-disable-next-line
export default {
  getHeroes: async () => {
    return [
      {
        name: 'Iron Man',
        from: 'Marvel',
        hero: await basicFetch(`/346`),
      },
      {
        name: 'Thor',
        from: 'Marvel',
        hero: await basicFetch(`/659`),
      },
      {
        name: 'Captain America',
        from: 'Marvel',
        hero: await basicFetch(`/149`) 
      },
      {
        name: 'Hulk',
        from: 'Marvel',
        hero: await basicFetch(`/332`)
      },
      {
        name: 'Winter Soldier',
        from: 'Marvel',
        hero: await basicFetch(`/714`)
      },
      {
        name: 'Batman',
        from: 'DC',
        hero: await basicFetch(`/70`),
      },
      {
        name: 'Superman',
        from: 'DC',
        hero: await basicFetch(`/644`)
      },
      {
        name: 'Homem Aranha',
        from: 'Marvel',
        hero: await basicFetch(`/620`)
      },
      {
        name: 'Visão',
        from: 'Marvel',
        hero: await basicFetch(`/697`)
      },
      {
        name: 'Dr. Estranho',
        from: 'Marvel',
        hero: await basicFetch(`/226`)
      },
      {
        name: 'Robin',
        from: 'DC',
        hero: await basicFetch(`/561`)
      },
      {
        name: 'Arqueiro',
        from: 'DC',
        hero: await basicFetch(`/298`)
      },
      {
        name: 'Aquaman',
        from: 'DC',
        hero: await basicFetch(`/38`)
      },
      {
        name: 'Cyborg',
        from: 'DC',
        hero: await basicFetch(`/194`)
      },
      {
        name: 'Coringa',
        from: 'DC',
        hero: await basicFetch(`/370`)
      },
      {
        name: 'Thanos',
        from: 'Marvel',
        hero: await basicFetch(`/655`)
      }
    ]
  }
}