import { Request, Response } from 'express';
// Models
import { Doctor } from '../../models';

export const updateDoctor = async ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'updateDoctor'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-DOCTOR]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

