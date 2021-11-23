import React, { useState } from 'react';
import styled from 'styled-components/native';
import EndLabel from '../Label/EndLabel';
import NoblessLabel from '../Label/NoblessLabel';
import PremiumLabel from '../Label/PremiumLabel';

interface Props {
  book: Book;
}

const matchLabelByStore = (store: string) => {
  switch (store) {
    case '노블레스':
      return (
        <Label>
          <NoblessLabel size={13} />
        </Label>
      );
    case '프리미엄':
      return (
        <Label>
          <PremiumLabel size={13} />
        </Label>
      );
    default:
      return;
  }
};

const ListBookBox: React.FC<Props> = props => {
  const {
    genre,
    title,
    author,
    summary,
    cover,
    store,
    isEnded,
    views,
    recommends,
    favorites,
  } = props.book;
  const [isMoreIntro, setIsMoreIntro] = useState<Boolean>(false);

  return (
    <Container>
      <Info activeOpacity={1} onPress={() => {}}>
        <Cover source={cover} />
        <Detail>
          <Header>
            <Genre>[{genre}]</Genre>
            <Title numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Title>
            {matchLabelByStore(store)}
            {isEnded && (
              <Label>
                <EndLabel size={13} />
              </Label>
            )}
          </Header>
          <Author>{author}</Author>
          <Intro numberOfLines={2} ellipsizeMode="tail">
            {summary}
          </Intro>
          <Scale>
            <Sector>조회 : {views}</Sector>
            <Sector>추천 : {recommends}</Sector>
            <Sector>선작 : {favorites}</Sector>
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
          <MoreIntro>{summary}</MoreIntro>
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

const Genre = styled.Text`
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
