/**
 * CSSを当てる方法(4) : Styled-components
 * スタイルを当てたコンポーネントを作成していく方法
 * CSS in JSで人気のライブラリ
 * 注意：コンポーネントの形をとるので、後から見たときに「普通のコンポーネント」か「スタイルを当てたコンポーネント」かが判別できなくなるので、命名規則を作ったほうが良い
 * scss記法がそのまま使えるので、Reactに移行するときとかに便利
 */

// nom installしたstyled-componentsをインポートして使う
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <StyleContainer>
      <StyleTitle>Styled Components</StyleTitle>
      <StyleButton type="button">Fight!!!!</StyleButton>
    </StyleContainer>
  );
};

// styled.{タグ名}`CSSプロパティ` を変数に格納し、この変数名でコンポーネントを作る
const StyleContainer = styled.div`
  margin-top: 20px;
  border: solid 2px blue;
  border-radius: 10px;
  padding: 8px;
`;
const StyleTitle = styled.p`
  font-size: 20px;
  color: skyBlue;
`;
const StyleButton = styled.button`
  background-color: black;
  color: white;
  appearance: none;
  border: none;
  padding: 8px;
  border-radius: 4px;
  letter-spacing: 0.1em;
  &:hover {
    cursor: pointer;
    background-color: blue;
  }
`;
