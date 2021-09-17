import { render, screen, fireEvent } from "@testing-library/react";
import { LikeDislike } from "./LikeDislike";

describe("LikeDisLike components renders with initial values", () => {
  beforeEach(() => {
    render(<LikeDislike />);
  });

  test("like button renders corrects likes", () => {
    const correctLikes = screen.getByText(/100/i);
    expect(correctLikes).toBeInTheDocument();
  });

  test("dislike button renders corrects dislikes", () => {
    const correctDislikes = screen.getByText(/25/i);
    expect(correctDislikes).toBeInTheDocument();
  });

  test("like button renders", () => {
    const likeButton = screen.getByRole("button", { name: /^like/i });
    expect(likeButton).toBeInTheDocument();
  });

  test("dislike button renders", () => {
    const dislikeButton = screen.getByRole("button", { name: /dislike/i });
    expect(dislikeButton).toBeInTheDocument();
  });

  test("thumbsdown renders", async () => {
    const thumbsdown = screen.getByTestId("thumbsDownIcon");
    expect(thumbsdown).toBeInTheDocument();
  });

  test("thumbsup renders", async () => {
    const thumbsup = screen.getByTestId("thumbsUpIcon");
    expect(thumbsup).toBeInTheDocument();
  });
});

describe("Can interact with LikeDislike buttons", () => {
  beforeEach(() => {
    render(<LikeDislike />);
  });

  test("like button renders correct text and likes when clicked and unclicked", async () => {
    const likeButton = screen.getByRole("button", { name: /^like/i });
    fireEvent.click(likeButton);

    expect(likeButton).toHaveTextContent("Liked");
    const correctLikes = screen.getByText(/101/i);
    expect(correctLikes).toBeInTheDocument();

    fireEvent.click(likeButton);

    expect(likeButton).toHaveTextContent("Like");
    const correctLikesReverted = screen.getByText(/100/i);
    expect(correctLikesReverted).toBeInTheDocument();
  });

  test("dislike button renders correct text and dislikes when clicked and unclicked", async () => {
    const dislikeButton = screen.getByRole("button", { name: /dislike/i });
    fireEvent.click(dislikeButton);

    expect(dislikeButton).toHaveTextContent("Disliked");
    const correctDislikes = screen.getByText(/26/i);
    expect(correctDislikes).toBeInTheDocument();

    fireEvent.click(dislikeButton);

    expect(dislikeButton).toHaveTextContent("Dislike");
    const correctDislikesReverted = screen.getByText(/25/i);
    expect(correctDislikesReverted).toBeInTheDocument();
  });

  test("when like clicked after dislike already enabled then correct text and like/dislike values rendered", async () => {
    const dislikeButton = screen.getByRole("button", { name: /dislike/i });
    fireEvent.click(dislikeButton);

    expect(dislikeButton).toHaveTextContent("Disliked");
    const correctDislikes = screen.getByText(/26/i);
    expect(correctDislikes).toBeInTheDocument();

    const likeButton = screen.getByRole("button", { name: /^like/i });
    expect(likeButton).toHaveTextContent("Like");
    const correctLikes = screen.getByText(/100/i);
    expect(correctLikes).toBeInTheDocument();

    fireEvent.click(likeButton);

    expect(dislikeButton).toHaveTextContent("Dislike");
    const correctDislikesReverted = screen.getByText(/25/i);
    expect(correctDislikesReverted).toBeInTheDocument();

    expect(likeButton).toHaveTextContent("Liked");
    const correctLikesIncreased = screen.getByText(/101/i);
    expect(correctLikesIncreased).toBeInTheDocument();
  });

  test("when dislike clicked after like already enabled then correct text and like/dislike values rendered", async () => {
    const likeButton = screen.getByRole("button", { name: /^like/i });
    fireEvent.click(likeButton);

    expect(likeButton).toHaveTextContent("Liked");
    const correctLikesIncreased = screen.getByText(/101/i);
    expect(correctLikesIncreased).toBeInTheDocument();

    const dislikeButton = screen.getByRole("button", { name: /dislike/i });
    expect(dislikeButton).toHaveTextContent("Dislike");
    const correctDislikesReverted = screen.getByText(/25/i);
    expect(correctDislikesReverted).toBeInTheDocument();

    fireEvent.click(dislikeButton);

    expect(dislikeButton).toHaveTextContent("Disliked");
    const correctDislikes = screen.getByText(/26/i);
    expect(correctDislikes).toBeInTheDocument();

    expect(likeButton).toHaveTextContent("Like");
    const correctLikes = screen.getByText(/100/i);
    expect(correctLikes).toBeInTheDocument();
  });
});
