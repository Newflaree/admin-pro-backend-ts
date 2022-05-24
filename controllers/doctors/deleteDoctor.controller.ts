import { Request, Response } from 'express';
// Models
import { Doctor } from '../../models';

export const deleteDoctor = async ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'deleteDoctor'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-DOCTOR]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
