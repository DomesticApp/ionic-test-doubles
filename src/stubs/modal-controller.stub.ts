import { ModalStub } from './modal.stub';

export class ModalControllerStub {
	public create (component : any, data : any, options : any = {}) : ModalStub {
		return new ModalStub ();
	}
}
