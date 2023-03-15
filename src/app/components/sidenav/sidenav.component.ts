import { RouterModule } from '@angular/router';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

interface ResizingEvent {
  isTracking: boolean;
  startingWidth?: number;
  startingCursorX?: number;
  handleWidth: number;
  maxWidth?: number;
  minWidth?: number;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class SidenavComponent implements AfterViewInit {
  @ViewChild('resizeHandle')
  resizeHandleRef?: ElementRef<HTMLElement>;

  @ViewChild('sidenavBody')
  sidenavBodyRef?: ElementRef<HTMLElement>;

  #resizingEvent: ResizingEvent = {
    isTracking: false,
    startingCursorX: 0,
    startingWidth: 0,
    handleWidth: 10,
    maxWidth: 0,
    minWidth: 200,
  };

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.#setupResizeHandle();
  }

  #setupResizeHandle(): void {
    if (
      this.resizeHandleRef === undefined ||
      this.sidenavBodyRef === undefined
    ) {
      return;
    }

    this.resizeHandleRef.nativeElement.addEventListener(
      'mousedown',
      (event) => {
        this.#resizingEvent.isTracking = true;

        this.#resizingEvent.startingCursorX = event.screenX;

        this.#resizingEvent.startingWidth =
          this.sidenavBodyRef!.nativeElement.clientWidth;

        // max width is the width of the window minus the width of the handle
        this.#resizingEvent.maxWidth =
          window.innerWidth - this.#resizingEvent.handleWidth;
      }
    );
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.#resizingEvent.isTracking) {
      return;
    }

    const cursorDeltaX = event.screenX - this.#resizingEvent.startingCursorX!;

    let newWidth = Math.min(
      this.#resizingEvent.startingWidth! + cursorDeltaX,
      this.#resizingEvent.maxWidth!
    );

    newWidth = Math.max(newWidth, this.#resizingEvent.minWidth!);

    document.body.style.setProperty('--sidenav-width', `${newWidth}px`);
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.#resizingEvent.isTracking = false;
  }
}
