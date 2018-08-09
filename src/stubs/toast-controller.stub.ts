import { ToastStub } from './toast.stub';

export class ToastControllerStub {
	public toast = new ToastStub ();

	public create (options : any = {}) : ToastStub {
		return this.toast;
	}
}
