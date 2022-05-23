import { Request, Response } from 'express';
// Models
import { Hospital } from '../../models';

export const getHospital = async ( req: Request, res: Response ) => {
  const { id } = req.params;

  try {
    const hospital = await Hospital.findById( id )
      .populate( 'user', 'name' ) || { status: false };

    if ( !hospital.status ) {
      return res.status( 400 ).json({
        ok: false,
        msg: 'There is no hospital with that id'
      });
    }

    res.status( 200 ).json({
      ok: true,
      hospital
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-HOSPITAL]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
