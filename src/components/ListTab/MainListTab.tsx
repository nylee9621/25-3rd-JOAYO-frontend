import React, { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs/lib/typescript/src/types';
import { displayWidth } from '@/constants/sizes';
import { LayoutEvent } from '@/utils/interface';

interface Route {
  key: any;
  name: string;
  params?: object | undefined;
}

const ListTab: React.FC<MaterialTopTabBarProps> = props => {
  const { state, descriptors, navigation, position } = props;
  const tabsRef = useRef<ScrollView>(null);
  const [tabsXPosition, setTabsXposition] = useState<number[]>([]);

  return (
    <Container>
      <TabsWrapper
        ref={tabsRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {state.routes.map((route: Route, index: number) => {
          const label = descriptors[route.key].options.tabBarLabel;
          const isSelected = state.index === index;

          useEffect(() => {
            tabsRef.current?.scrollTo({ x: tabsXPosition[state.index] - 50 });
          }, [state.index]);

          const onPress = (e: any) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isSelected && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TabBtn
              key={index}
              id={index}
              tabsLeng={state.routes.length}
              activeOpacity={1}
              onPress={onPress}
              onLayout={(e: LayoutEvent) =>
                setTabsXposition(tabsXPosition.concat(e.nativeEvent.layout.x))
              }
            >
              <Name isSelected={isSelected}>{label}</Name>
            </TabBtn>
          );
        })}
      </TabsWrapper>
    </Container>
  );
};

const Container = styled.View`
  padding: 12px 0;
  height: 45px;
  background-color: #20459e;
`;

const TabsWrapper = styled.ScrollView``;

const TabBtn = styled.TouchableOpacity<{ id: number; tabsLeng: number }>`
  ${({ tabsLeng }) =>
    tabsLeng > 3 ? 'padding: 0 20px;' : `width:${displayWidth / tabsLeng}px`}
  ${({ id }) =>
    id !== 0 ? 'border-left-width: 1px; border-left-color: #4769b6' : ''}
`;

const Name = styled.Text<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? 'white' : '#ffffff66')};
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export default ListTab;
