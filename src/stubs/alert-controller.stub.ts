import { AlertStub } from './alert.stub';

export class AlertControllerStub {
	public alert = new AlertStub ();

	public create (options : any = {}) : AlertStub {
		return this.alert;
	}
}
