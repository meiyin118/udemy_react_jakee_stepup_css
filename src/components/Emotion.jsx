/**@jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

/**
 * CSSを当てる方法(5) : Emotion
 * Emotionの中でも方法がいくつかあるので、PJで認識合わせて使うとよし
 */

// `@emotion/react`と`@emotion/styled`をインストール
export const Emotion = () => {
  // 方法1：css`CSSプロパティ（scss記法も可能）`で指定する方法
  const containerStyle = css`
    margin-top: 20px;
    border: solid 2px blue;
    border-radius: 10px;
    padding: 8px;
  `;
  // 方法2：InlineStyleのような書き方をする方法 css({オブジェクトでInlineStyleのようにcssを指定})
  const titleStyle = css({
    fontSize: "20px",
    color: "skyBlue"
  });
  // 方法3: StyledComponentsと似たような書き方
  const SButton = styled.button`
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
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <SButton type="button">Fight!!!!</SButton>
    </div>
  );
};
