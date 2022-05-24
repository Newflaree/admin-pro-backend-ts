import { Request, Response } from 'express';
// Models
import { Doctor } from '../../models';

export const createDoctor = async ( req: Request, res: Response ) => {
  try {

    res.status( 201 ).json({
      ok: true,
      msg: 'createDoctor'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-DOCTOR]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
