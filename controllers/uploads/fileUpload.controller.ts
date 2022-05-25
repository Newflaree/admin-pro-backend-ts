import { Request, Response } from 'express';
// Models
import { Doctor, Hospital, User } from '../../models';

export const fileUpload = async ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'fileUpload'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.FILE-UPLOAD]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
