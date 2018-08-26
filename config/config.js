import Cosmic from 'cosmicjs'
const api = Cosmic()
const bucket = api.bucket({
  slug: process.env.COSMIC_BUCKET || 'cosmic-game',
  // read_key: process.env.COSMIC_READ_KEY,
  // write_key: process.env.COSMIC_WRITE_KEY'
  // NOTE: You may have to do the same thing you did for slug and hardcode it.
})
export default bucket
