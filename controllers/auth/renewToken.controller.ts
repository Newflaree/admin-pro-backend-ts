import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../interfaces/http-interfaces';
// Helpers
import { generateJWT } from '../../helpers/jwt';

export const renewToken = async ( req: UserAuthRequest, res: Response ) => {
  const { _id } = req.user;

  try {
    const token = await generateJWT( _id )

    res.status( 200 ).json({
      ok: true,
      token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH.LOGIN]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
