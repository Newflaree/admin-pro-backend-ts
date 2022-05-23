import { Request, Response } from 'express';
// Models
import { Hospital } from '../../models';

export const deleteHospital = async ( req: Request, res: Response ) => {
  const { id } = req.params;

  try {
    const hospital = await Hospital.findByIdAndUpdate( id, { status: false } )
      .populate( 'user', 'name' ) || { status: false };

      if ( !hospital.status ) {
        return res.status( 400 ).json({
          ok: false,
          msg: 'There is no hospital with that id'
        });
      }

    res.status( 200 ).json({
      ok: true,
      msg: `User was successfully deleted`
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-HOSPITAL]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
