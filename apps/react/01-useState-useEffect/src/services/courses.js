import PocketBase from 'pocketbase'

const PB_URI = 'http://127.0.0.1:8090'
const PB = new PocketBase(PB_URI)

export const getCourses = async () => {
  const courses = await PB.collection('courses').getFullList({
    sort: '-created'
  })
  console.log({ courses })
  return courses
}
