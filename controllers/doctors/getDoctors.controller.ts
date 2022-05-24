import { Request, Response } from 'express';
// Models
import { Doctor } from '../../models';

export const getDoctors = async ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'getDoctors'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-DOCTORS]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
