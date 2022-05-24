import { Response } from 'express';
import { UserAuthRequest } from '../../interfaces/http-interfaces';
// Models
import { Doctor } from '../../models';

export const createDoctor = async ( req: UserAuthRequest, res: Response ) => {
  const { name, hospital } = req.body;

  const data = {
    name,
    user: req.user._id,
    hospital
  }

  try {
    const doctor = new Doctor( data );
    await doctor.save();

    res.status( 201 ).json({
      ok: true,
      doctor
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-DOCTOR]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
