import { NavControllerStub } from './nav-controller.stub';

export class AppStub {
	public getActiveNav () : NavControllerStub {
		return new NavControllerStub ();
	}
}
