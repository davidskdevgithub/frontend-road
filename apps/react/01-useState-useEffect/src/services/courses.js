import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

export const getCourses = async () => {
  const courses = await pb.collection('courses').getFullList({
    sort: '-created'
  })
  console.log({ courses })
  return courses
}
