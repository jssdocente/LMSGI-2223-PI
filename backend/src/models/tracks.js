import mongoose from 'mongoose'

const tracksScheme = new mongoose.Schema(
  {
    name: {
      type: String
    },
    album: {
      type: String
    },
    cover: {
      type: String,
      type: String,
      validate: {
        validator: (req) => {
          return true
        },
        message: 'ERROR_URL'
      }
    },
    artist: {
      name: {
        type: String
      },
      nickname: {
        type: String
      },
      nationality: {
        type: String
      }
    },
    duration: {
      start: {
        type: Number
      },
      end: {
        type: Number
      }
    },
    mediaId: {
      type: mongoose.Types.ObjectId
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default mongoose.model('tracks', tracksScheme)
