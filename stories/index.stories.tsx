import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import './index.less';
// import { Button, Welcome } from '@storybook/react/demo';

import CommunitySelectorModal, { ETabsType } from '../src/index';
import CommunityRadioItem from '../src/common/community-radio-item/index';
import CommunityItem from '../src/common/community-item/';
import '../src/index.less';

const stories = storiesOf('CommunitySelector', module);

stories.add(
    'CommunitySelectorModal',
    () => {
        return (
            <CommunitySelectorModal
                defaultVisible={true}
                ref={e => {
                    console.log('ref', e);
                }}
                onConfirm={item => console.log(item)}
                onCancel={() => {
                    alert('close');
                }}
            />
        );
    },
    {},
);

stories.add(
    'CommunitySelectorModal(Only with MyCommunity; no choose tip)',
    () => {
        return (
            <CommunitySelectorModal
                needChooseTip={false}
                disabledIds={['1620080506548232']}
                defaultVisible={true}
                ref={e => {
                    console.log('ref', e);
                }}
                onConfirm={item => console.log(item)}
                onCancel={() => {
                    alert('close');
                }}
                displayedTabs={[ETabsType.MyCommunity]}
            />
        );
    },
    {},
);

stories.add(
    'CommunityRadioItem',
    () => (
        <div className="c-community-selector-modal">
            <CommunityRadioItem
                checked={false}
                community={{"media_id": "1601330681190414", "square_cover": "fef600003e3659a5d042", "member_count": 4, "title": "\u4ed8\u8d39\u5708\u5b50\u63a5\u5165 testing \u5e73\u53f0", "share_price": 0.0, "media_name": "quadtree", "price": 0.05, "community_id": "6713777226220831235", "renew_price": 0.04}}
            />
        </div>
    ),
    {},
);

stories.add(
    'CommunityItem',
    () => (
        <div className="c-community-selector-modal">
            <CommunityItem
                community={{"media_id": "1601330681190414", "square_cover": "fef600003e3659a5d042", "member_count": 4, "title": "\u4ed8\u8d39\u5708\u5b50\u63a5\u5165 testing \u5e73\u53f0", "share_price": 0.0, "media_name": "quadtree", "price": 0.05, "community_id": "6713777226220831235", "renew_price": 0.04}}
            />
        </div>
    ),
    {},
);

stories.add(
    '外层控制visible',
    () => (
        <div className="c-community-selector-modal">
            <CommunitySelectorModal
                needChooseTip={false}
                disabledIds={['1620080506548232']}
                visible
                ref={e => {
                    console.log('ref', e);
                }}
                onConfirm={item => console.log(item)}
                onCancel={() => {
                    alert('close');
                }}
                displayedTabs={[ETabsType.MyCommunity]}
            />
        </div>
    ),
    {},
);

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('TestComponent', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
