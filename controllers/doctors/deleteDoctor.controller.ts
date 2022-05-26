import { Request, Response } from 'express';
// Models
import { Doctor } from '../../models';

/*
  PATH: '/api/doctors/:id'
  DOC: 
*/
export const deleteDoctor = async ( req: Request, res: Response ) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findByIdAndUpdate( id, { status: false } ) || { status: false };

    if ( !doctor.status ) {
      return res.status( 400 ).json({
        ok: false,
        msg: 'There is no doctor with that id'
      });
    }

    res.status( 200 ).json({
      ok: true,
      msg: `Doctor was successfully deleted`
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-DOCTOR]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
