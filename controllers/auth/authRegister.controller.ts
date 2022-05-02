import { Request, Response } from 'express';

export const authRegister = ( req: Request, res: Response ) => {
  try {

    res.status( 201 ).json({
      ok: true,
      msg: 'authRegister'
    });

  } catch ( err ) {
    console.log( `${ '[AUTH-REGISTER.CONTROLLER]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: true,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
