import UserSuggestionItem, { UserSuggestionItemProps } from "./UserSuggestionItem"

export default function UserSuggestionList() {

  const userSuggestionList: UserSuggestionItemProps[] = [
    {
      url: "https://cdn-icons-png.flaticon.com/512/2919/2919906.png",
      username: "username_test"
    },
    {
      url: "https://cdn-icons-png.flaticon.com/512/2919/2919906.png",
      username: "username_test"
    },
    {
      url: "https://cdn-icons-png.flaticon.com/512/2919/2919906.png",
      username: "username_test"
    },
  ]
  return (
    <div>
      {
        userSuggestionList.map((userSuggestionItem: UserSuggestionItemProps) => {
          return <UserSuggestionItem {...userSuggestionItem} />
        })
      }
    </div>
  )
}
