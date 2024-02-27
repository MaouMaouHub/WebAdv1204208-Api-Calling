import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-async-demo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './async-demo.component.html',
  styleUrl: './async-demo.component.scss',
})
export class AsyncDemoComponent {
  async delay(ms: number) {
    return await new Promise((resolve) => setTimeout(resolve, ms));
  }

  async btnClick() {
    this.normalFunction('1' + new Date());
    this.normalFunction('2' + new Date());

    // this.delay(2000);
    // console.log('3 ' + new Date());
    // this.delay(2000);
    // console.log('4 ' + new Date());

    // this.delay(2000).then(() => {
    //   console.log('3 ' + new Date());
    // });

    // this.delay(2000).then(() => {
    //   console.log('4 ' + new Date());
    // });

    // this.delay(2000).then(() => {
    //   console.log('3 ' + new Date());
    //   this.delay(2000).then(() => {
    //     console.log('4 ' + new Date());
    //   });
    // });
    // console.log('5 ' + new Date());

    // this.delay(2000).then(() => {
    //   console.log('3 ' + new Date());
    //   this.delay(2000).then(() => {
    //     console.log('4 ' + new Date());
    //     this.delay(2000).then(() => {
    //       console.log('5 ' + new Date());
    //     });
    //   });
    // });

    // console.log('6 ' + new Date());

    await this.delay(2000);
    console.log('3 ' + new Date());
    await this.delay(2000);
    console.log('4 ' + new Date());
  }

  normalFunction(text: string) {
    console.log(text);
  }
}
