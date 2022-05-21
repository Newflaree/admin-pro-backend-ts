import { Request, Response } from 'express';
// Models
import { Hospital } from '../../models';

export const deleteHospital = async ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: `deleteHospital`
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-HOSPITAL]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
