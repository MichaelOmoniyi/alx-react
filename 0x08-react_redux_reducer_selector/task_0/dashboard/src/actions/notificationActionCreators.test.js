import {
  markAsAread,
  setNotificationFilter,
} from "./notificationActionCreators";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes";

describe("Test for action creators in notificationActionCreators.js", () => {
  it("ensure the markAsAread return the right output", () => {
    const index = 1;

    expect(markAsAread(index)).toEqual({
      type: MARK_AS_READ,
      index: 1,
    });
  });

  it("ensure the markAsAread return the right output", () => {
    const filter = DEFAULT;

    expect(setNotificationFilter(NotificationTypeFilters[filter])).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    });
  });
});
