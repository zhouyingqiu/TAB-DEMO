import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

interface TabItem {
    name: string;
    id: number;
    index: number;
    active?: boolean;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('flyInOut', [
            state('slide', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(100%)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'translateX(-100%)' }))
            ])
        ])
    ]
})
export class AppComponent implements OnInit {
    tabNavs: TabItem[] = [
        {
            name: '推荐',
            id: 1,
            index: 1
        },
        {
            name: 'VIP',
            id: 2,
            index: 2
        },
        {
            name: '小说',
            id: 3,
            index: 3
        },
        {
            name: '直播',
            id: 5,
            index: 5
        },
        {
            name: '儿童',
            id: 6,
            index: 6
        },
        {
            name: '武汉',
            id: 7,
            index: 7
        }
    ];

    activeTab: TabItem;
    slideDirection = 'translate3d(22.401px, 0px, 0px)';

    activeNavWidth = '22.401px';

    ngOnInit() {
        this.activeTab = this.tabNavs[0];
        this.activeTab.active = true;
    }

    handleTabChange(navItem, event) {
        const itemSpace = event.target.getBoundingClientRect();
        // const inOut = navItem.active ? 'in' : 'out';
        // const lastIndex = navItem.index;
        this.activeTab.active = false;
        navItem.active = true;
        this.activeTab = navItem;
        this.slideTabNavBar(itemSpace);
    }

    slideTabNavBar(itemSpace) {
        console.log(itemSpace);
        this.activeNavWidth = `${itemSpace.width / 3}px`;
        const slideSpace = itemSpace.left + itemSpace.width / 3  - 24 ;
        this.slideDirection = `translate3d(${slideSpace}px, 0px, 0px)`;
    }
}
