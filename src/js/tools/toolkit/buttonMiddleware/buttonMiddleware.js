import { isLabelling } from '../../labellerPopUp/labellingProcess';
import { isDrawingInProgress } from '../../../canvas/objects/polygon/polygon';
import interruptAllCanvasEvents from '../../../canvas/mouseInteractions/mouseEvents/resetCanvasUtils/resetCanvasState';

function interruptCanvasEventsBeforeFunc(func) {
  interruptAllCanvasEvents();
  if (func) func();
}

function interruptCanvasEventsAfterFunc(...funcs) {
  funcs.forEach((func) => { func(); });
  interruptAllCanvasEvents();
}

function interruptCanvasEventsBeforeFuncWParams(placeHolder, func, input) {
  interruptAllCanvasEvents();
  if (func) func(input);
}

function doNothingIfLabellingInProgress(func) {
  if (!isLabelling()) {
    if (func) func();
  }
}

function doNothingIfCreatingNewPolygon(func) {
  if (!isDrawingInProgress()) {
    if (func) func();
  }
}

function interruptAllCanvasEventsIfLabellingInProgress(func) {
  if (isLabelling()) {
    interruptAllCanvasEvents();
  }
  if (func) func();
}

export {
  interruptCanvasEventsBeforeFunc,
  interruptCanvasEventsAfterFunc,
  // rename
  interruptCanvasEventsBeforeFuncWParams,
  interruptAllCanvasEventsIfLabellingInProgress,
  doNothingIfLabellingInProgress,
  doNothingIfCreatingNewPolygon,
};
