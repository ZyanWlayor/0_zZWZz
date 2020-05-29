import { renderSize } from "./file"

test('test 12b', () => {
    expect(renderSize("12")).toBe("12.00Bytes")
});

test('test 12M', () => {
    expect(renderSize("12582912")).toBe("12.00MB")
});
