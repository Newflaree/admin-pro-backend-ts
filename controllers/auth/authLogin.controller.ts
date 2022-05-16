import { Request, Response } from 'express';

export const authLogin = ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'authLogin'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH.LOGIN]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: true,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
