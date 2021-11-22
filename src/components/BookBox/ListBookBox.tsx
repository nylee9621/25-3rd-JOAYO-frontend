import React, { useState } from 'react';
import styled from 'styled-components/native';
import EndLabel from '../Label/EndLabel';
import PremiumLabel from '../Label/PremiumLabel';

const ListBookBox: React.FC = () => {
  const [isMoreIntro, setIsMoreIntro] = useState<Boolean>(false);

  return (
    <Container>
      <Info activeOpacity={1} onPress={() => {}}>
        <Cover source={require('@/assets/images/book-cover-sample.png')} />
        <Detail>
          <Header>
            <Category>[스포츠]</Category>
            <Title numberOfLines={1} ellipsizeMode="tail">
              제목인데 일단 글자수를 늘려보자 영차영차
            </Title>
            <Label>
              <PremiumLabel size={13} />
            </Label>
            <Label>
              <EndLabel size={13} />
            </Label>
          </Header>
          <Author>작가는 작가</Author>
          <Intro numberOfLines={2} ellipsizeMode="tail">
            이것이 줄거리인데 이것도 일단 줄 수를 채워야하니 열심히 늘려보았다
            영차영차 조금만 더 늘어나라. 몇 자 안남았는데 왜 이리 안 늘어나냐.
          </Intro>
          <Scale>
            <Sector>조회 : 7,900</Sector>
            <Sector>추천 : 189</Sector>
            <Sector>선작 : 22</Sector>
          </Scale>
        </Detail>
      </Info>
      <Buttons>
        <ActionBtn activeOpacity={1} onPress={() => {}}>
          <Icon source={require('@assets/images/MiddleMenu/star.png')} />
          <BtnLabel>선호작등록</BtnLabel>
        </ActionBtn>
        <Gap />
        <ActionBtn
          activeOpacity={1}
          onPress={() => {
            setIsMoreIntro(!isMoreIntro);
          }}
        >
          {isMoreIntro ? (
            <Icon source={require('@assets/images/Book/minus.png')} />
          ) : (
            <Icon source={require('@assets/images/Book/plus.png')} />
          )}
          <BtnLabel>작품소개</BtnLabel>
        </ActionBtn>
      </Buttons>
      {isMoreIntro && (
        <MoreIntroWrapper>
          <MoreIntro>이것은 작품소개</MoreIntro>
        </MoreIntroWrapper>
      )}
    </Container>
  );
};

const Container = styled.View`
  border-top-width: 0.5px;
  border-top-color: #ebebeb;
`;

const Info = styled.TouchableOpacity`
  flex-direction: row;
  padding: 6px 6px 0 6px;
  background-color: white;
`;

const Cover = styled.Image`
  width: 73px;
  height: 110px;
  border-width: 1px;
  border-color: #ebebeb;
`;

const Detail = styled.View`
  flex: 1;
  margin-left: 10px;
  height: 110px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Category = styled.Text`
  color: #4386dc;
  font-size: 14px;
`;

const Title = styled.Text`
  flex: 1;
  margin: 0 5px;
  color: black;
  font-size: 14px;
`;

const Label = styled.View`
  margin-left: 2px;
`;

const Author = styled.Text`
  margin: 8px 0;
  padding-bottom: 4px;
  max-width: 100%;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  color: #20459e;
  font-size: 12px;
`;

const Intro = styled.Text`
  color: #000000b3;
  font-size: 11.5px;
  line-height: 16px;
`;

const Scale = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
`;

const Sector = styled.Text`
  margin-right: 10px;
  color: #00000080;
  font-size: 10px;
`;

const Buttons = styled.View`
  flex-direction: row;
  padding: 6px;
  background-color: white;
`;

const ActionBtn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 35px;
  background-color: #f7f7f7;
  border: 0.5px solid #ebebeb;
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

const BtnLabel = styled.Text`
  margin-left: 3px;
  color: #000000b3;
  font-size: 12px;
`;

const Gap = styled.View`
  width: 4px;
`;

const MoreIntroWrapper = styled.ScrollView`
  margin-bottom: 6px;
  padding: 12px;
  background-color: #efefef;
  border: 0.5px solid #e6e6e6;
`;

const MoreIntro = styled.Text`
  color: #000000b3;
  font-size: 12px;
`;

export default ListBookBox;
