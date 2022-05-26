import { Request, Response } from 'express';
// Cloudinary
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config( process.env.CLOUDINARY_URL || '' );
// Interfaces
import { FileRequest } from '../../interfaces/http-interfaces';
// Models
import { Doctor, Hospital, User } from '../../models';

export const fileUpload = async ( req: FileRequest, res: Response ) => {
  const { id, collection } = req.params;

  let model: any;

  try {
    switch ( collection ) {
      case 'doctors': 
        model = await Doctor.findById(id)

        if ( !model ) {
          return res.status( 400 ).json({
            ok: false,
            msg: 'There is no doctor with that id'
          });
        }

        break;

      case 'hospitals': 
        model = await Hospital.findById(id)

        if ( !model ) {
          return res.status( 400 ).json({
            ok: false,
            msg: 'There is no hospital with that id'
          });
        }

        break;

      case 'users': 
        model = await User.findById(id)

        if ( !model ) {
          return res.status( 400 ).json({
            ok: false,
            msg: 'There is no user with that id'
          });
        }

        break;

      default: 
        return res.status( 500 ).json({
          ok: false,
          msg: 'This endpoint is not yet validated'
        });
    }

    res.status( 200 ).json({
      ok: true,
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.FILE-UPLOAD]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
