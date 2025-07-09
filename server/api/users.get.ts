export default defineEventHandler(async (event) => {
  const users = await useDb(event).select().from(tables.users).all()
  return users
})
